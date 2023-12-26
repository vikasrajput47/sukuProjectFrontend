export const  getName=(inputString)=> {
  return inputString.trim().split(/\s+/).slice(2).join(" ");
}


