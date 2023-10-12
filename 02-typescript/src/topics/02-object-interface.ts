const skills:string[] = ['Bash','Counter','Healing'];

interface Character{
  name:string;
  hp:number;
  skills:string[];
  hometown?:string
}

const strider:Character = {
  name:'Strider',
  hp:100,
  skills:['Bash','Counter'],
}


strider.hometown='Rivendell';
console.table(strider);




interface Mascota{
  nombre:string;
  edad:number;
  raza:string;
  peso:number
}

const dog:Mascota={
  nombre: "Kiara",
  edad: 3,
  raza: "Schauzer",
  peso: 15
}

console.table(dog);



export {};