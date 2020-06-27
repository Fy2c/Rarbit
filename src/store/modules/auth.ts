import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import authApi from "@/api/auth";

export interface IUserState {
    uid: string,
    name: string,
    avatar: string,
    isAuthorized: boolean
}

@Module({
    preserveState: true,
    name: 'auth',
})

export class Auth extends VuexModule implements IUserState {
    public uid: string = '';
    public name: string = '';
    public avatar: string = '';
    public isAuthorized: boolean = false;

    @Mutation
    setUser(user: IUserState) {
        user = user || {};
        this.uid = user.uid;
        this.name = user.name;
        this.avatar = user.avatar;
        this.isAuthorized = !!user.uid;
    }

    get user(){
        return { 
            uid: this.uid, 
            name: this.name, 
            avatar: this.avatar,
            isAuthorized: this.isAuthorized
        };
    }

    @Action({rawError: true})
    async Logout(){
        await authApi.logOut()
                     .then(() => {
                        this.context.commit('setUser', {});
                     });
    }

    @Action({ rawError: true })
    async LoginByFaceBook(){
        await authApi.signInByFacebook()
               .then(u => {
                    var user: any = u.user || {}
                    this.context.commit('setUser', {
                        uid: user.uid,
                        name: user.displayName,
                        avatar: user.photoURL,
                        isAuthorized: true
                    });
               });
    }
}