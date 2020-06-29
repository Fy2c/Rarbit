import Config from '@/settings';
import 'firebase/firestore';

class UploadFormData{
    private createFormData(file: any, tags: any) {
        const formData = new FormData();
        formData.append('upload_preset', Config.Cloudinary.uploadPresetImage);
        formData.append('tags', tags);
        formData.append('file', file);
      
        return formData;
    }

    createShowImageFormData (file: any) {    
        return this.createFormData(file, ['show', 'banner']);
    }
}

export default new UploadFormData();

  