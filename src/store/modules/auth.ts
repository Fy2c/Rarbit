import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import authApi from "@/api/auth";

@Module({
  preserveState: true,
  name: "auth"
})
export class Auth extends VuexModule implements IUserState {

  //#region properties
  public uid: string = "";
  public name: string = "";
  public avatar: string = "";
  public isAuthorized: boolean = false;
  //#endregion
  
  get user(): IUserState {
    return {
      uid: this.uid,
      name: this.name,
      avatar: this.avatar,
      isAuthorized: this.isAuthorized
    };
  }

  @Mutation
  setUser(user: IUserState): void {
    console.log(user);
    user = user || {};
    this.uid = user.uid;
    this.name = user.name;
    this.avatar = user.avatar;
    this.isAuthorized = !!user.uid;
  }

  @Action({ rawError: true })
  async Logout(): Promise<void> {
    await authApi.logOut()
                 .then(() =>
                    this.context.commit("setUser", {})
                 );
  }

  @Action({ rawError: true })
  async LoginByFaceBook(): Promise<void> {
    await authApi.signInByFacebook()
                 .then((user: any) => {
       
                    user = user.user || {}
 
                    let updatedUser = {
                        uid: user.uid,
                        name: user.displayName,
                        avatar: user.photoURL,
                        isAuthorized: !!user.uid
                    }

                    this.context.commit("setUser", updatedUser);
                });
  }

}

export interface IUserState {
    uid: string;
    name: string;
    avatar: string;
    isAuthorized: boolean;
}