class User{
    constructor(public name: string, public age: number, protected status: boolean) {
    }
    getName():string{
        return this.name
    }
    setName(name:string){
        this.name = name
    }
}
let user1= new User ('Vlad' ,20, true)
user1.setName('Anton')
console.log(user1.getName())