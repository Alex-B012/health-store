export interface IngredientDesc {
   title: string;
   text: string[];
}

export interface CapsuleAmount {
   number: number;
   unit: string;
   daily_value?: number;
}

export interface IngredientData {
   id: number;
   name: string;
   capsule_contains: CapsuleAmount;
   capsules_2_contain: CapsuleAmount;
}

export interface TextItem {
   title?: string;
   text: string[];
}

export interface PharmacologicalSection {
   title: string;
   data: TextItem[];
}

export interface FurtherInformationSection {
   title?: string;
   data: TextItem[];
}


export interface PharmacologicalDataItem {
   title?: string;
   text: string[];
}

export interface PharmacologicalSection {
   title: string;
   data: PharmacologicalDataItem[];
}

export interface FurtherInformationItem {
   text: string[];
}

