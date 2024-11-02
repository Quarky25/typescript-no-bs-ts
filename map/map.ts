// ! store information about a dog but doing it flexibal.
type MyFlexibalDogInfo = {
    name: string;
    [key: string]: string | number;

} 
const dog: MyFlexibalDogInfo = {
    name: "little guy",
    breed: "Mutt",
    age: 2
}

// ! Mapped types, Template literals

interface DogInfo {
    name: string;
    age: number;
}

type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
};

type DogInfoOptions = OptionsFlags<DogInfo>;

type Listeners<Type> = {
 [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (newValue: Type[Property]) => void;
} & {
    [Property in keyof Type as `on${Capitalize<string & Property>}Delete`]?: () => void;
   }

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
    throw "Needs to be implemented";
}

const littleGuy: DogInfo = {
    name: "little guy",
    age: 13
}

type DogInfoListeners = Listeners<DogInfo>;

listenToObject(littleGuy, {
    onNameChange: (v: string) => {},
    onAgeChange: (v: number) => {},
    onAgeDelete: () => {},
    onNameDelete: () => {},
})