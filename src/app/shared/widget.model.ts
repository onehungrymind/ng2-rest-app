export interface Widget {
  id: number;
  img?: string;
  name?: string;
  description?: string;
  featured?: boolean;
}

export const widgets = [
  {
    "id": 1,
    "name": "Widget 1",
    "description": "This is a description",
    "featured": true
  },
  {
    "id": 2,
    "name": "Widget 2",
    "description": "This is a description!",
    "featured": false
  },
  {
    "id": 3,
    "name": "Widget 3",
    "description": "This is a lovely widget",
    "featured": false
  }
];
