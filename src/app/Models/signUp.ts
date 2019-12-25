export class SignUpModel{
  constructor(
   public name ?: string, 
   public employId ?: string, 
   public email ?: string, 
   public password ?: string, 
   public confirmPWD ?: string, 
   private _token ?: string,
   private _tokenExpirationDate ?: Date){
   }
   get token(){
     if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
       return null;
     }
     return this._token;
   }
}