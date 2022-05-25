interface IPerson {
  name: string;
  age: number;
}

interface Square {
  height: number;
  width: number;
  info: string;
}

interface IPersonWithJob extends IPerson {
  jobName?: string;
}

const person: IPersonWithJob = {
  name: "Ivan",
  age: 22,
};

const square: Square = {
  height: 5,
  width: 6,
  info: "square",
};

const persons: IPersonWithJob[] = [
  { name: "Ivan", age: 22 },
  { name: "Ivan", age: 22 },
];

const printObjFromKey = <T extends {}, Key extends keyof T>(
  key: Key,
  obj: T,
): T[Key] => obj[key];

const returnValue = printObjFromKey("info", square);

interface Data<T> {
  items: T[];
}

const data: Data<IPersonWithJob> = {
  items: [{ age: 4, name: "adfsdf" }],
};

const data1: Data<Square> = {
  items: [{ height: 5, width: 6, info: "square" }],
};

console.log("printObj", printObjFromKey("width", square));
