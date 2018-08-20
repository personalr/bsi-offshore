export class Prosjekt {
    constructor(
      public id: number, 
      public name: string, 
      public annet1: string, 
      public scopes:string[],  
      public client: string,
      public period: string,
      public vessel: string,
      public location:string,
      public bilder :string[],
      public hovedbilde: string
    ) 
    

    {
  }




}
