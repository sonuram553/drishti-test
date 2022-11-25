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
    dish: "fries",
    station: "deepfrier",
    duration: 1668.488,
    startTime: "2022-11-25T15:15:18.642Z",
    action: "fry",
  },
  {
    id: 2,
    dish: "eggs",
    station: "boiler1",
    duration: 1668.488,
    startTime: "2022-11-25T15:15:18.642Z",
    action: "boil",
  },
  {
    id: 3,
    dish: "lasagna",
    station: "oven1",
    duration: 1668.488,
    startTime: "2022-11-25T15:15:18.642Z",
    action: "bake",
  },
  {
    id: 4,
    dish: "pizza",
    station: "oven2",
    duration: 1668.488,
    startTime: "2022-11-25T15:15:18.642Z",
    action: "bake",
  },
  {
    id: 5,
    dish: "burger",
    station: "grill1",
    duration: 1668.488,
    startTime: "2022-11-25T15:15:18.642Z",
    action: "grill",
  },
  {
    id: 6,
    dish: "cake",
    station: "prep1",
    duration: 1668.488,
    startTime: "2022-11-25T15:15:18.642Z",
    action: "prep",
  },
  {
    id: 7,
    dish: "egg",
    station: "grill1",
    duration: 1668.488,
    startTime: "2022-11-25T15:15:18.642Z",
    action: "toss",
  },
  {
    id: 8,
    dish: "salad",
    station: "saladbay1",
    duration: 1668.488,
    startTime: "2022-11-25T15:15:18.642Z",
    action: "toss",
  },
];

export { actions, stations, dishes, data as actionListData };
