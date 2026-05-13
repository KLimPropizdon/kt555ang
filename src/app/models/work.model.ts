export interface Work {
    id: number; 
    title: string;
    full_title: string;
    tags: string[];
    main_img: string; 
    year: string; 
    text: string; 
    content: Array<[string, string]>; 
  }