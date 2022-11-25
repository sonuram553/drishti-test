const actions = [
  "grill",
  "toss",
  "prep",
  "bake",
  "dress",
  "presentation",
  "boil",
  "fry",
];

const stations = [
  "dispatch1",
  "dispatch2",
  "saladbay1",
  "saladbay2",
  "deepfrier",
  "boiler1",
  "oven1",
  "oven2",
  "prep1",
  "prep2",
  "grill1",
];

const dishes = [
  "fires",
  "eggs",
  "lasagna",
  "pizza",
  "burger",
  "cake",
  "egg",
  "salad",
];

const data = [
  {
    id: 1,
    dish: "Fries",
    station: "Deepfrier",
    duration: 1668.488,
    startTime: "2022-11-25T15:15:18.642Z",
    action: "Fry",
  },
  {
    id: 2,
    dish: "Eggs",
    station: "Boiler1",
    duration: 1668.488,
    startTime: "2022-11-25T15:15:18.642Z",
    action: "Boil",
  },
  {
    id: 3,
    dish: "Lasagna",
    station: "Oven1",
    duration: 1668.488,
    startTime: "2022-11-25T15:15:18.642Z",
    action: "Bake",
  },
  {
    id: 4,
    dish: "Pizza",
    station: "Oven2",
    duration: 1668.488,
    startTime: "2022-11-25T15:15:18.642Z",
    action: "Bake",
  },
  {
    id: 5,
    dish: "Burger",
    station: "Grill1",
    duration: 1668.488,
    startTime: "2022-11-25T15:15:18.642Z",
    action: "Grill",
  },
  {
    id: 6,
    dish: "Cake",
    station: "Prep1",
    duration: 1668.488,
    startTime: "2022-11-25T15:15:18.642Z",
    action: "Prep",
  },
  {
    id: 7,
    dish: "Egg",
    station: "Grill1",
    duration: 1668.488,
    startTime: "2022-11-25T15:15:18.642Z",
    action: "Toss",
  },
  {
    id: 8,
    dish: "Salad",
    station: "Saladbay1",
    duration: 1668.488,
    startTime: "2022-11-25T15:15:18.642Z",
    action: "Toss",
  },
];

export { actions, stations, dishes, data as actionListData };
