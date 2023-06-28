interface ValidationObject {
    [key: string]: (value: string) => { [key: string]: boolean };
  }

  export interface ErrorState {
    email?: boolean;
    name?: boolean;
    message?: boolean;
  }


const emailRegex =/^\w+([\\.-]?\w+)*@(gmail\.com|yahoo\.com|hotmail\.com|aol\.com|outlook\.com)$/;
const validation:ValidationObject= {
    email: (value:string)=>{
        return (emailRegex.test(value.trim()))? {email: false} : {email: true}
    },
  name: (value:string)=>{
    return  (value.trim().length < 6) ? {name: true} : {name: false};
  },
  message: (value:string)=>{
    const words = value.trim().split(/\s+/).length;
     return (words< 10 || words > 100) ?  {message: true}: {message: false}
  }
}

export default validation;
