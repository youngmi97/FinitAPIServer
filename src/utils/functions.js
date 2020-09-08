export const isObjectId = (id) => {
  if (mongoose.Types.ObjectId.isValid(id)) {
    throw new UserInputError(`{id} is not valid user ID`);
  }
};

export const jsonKeys = (jsonData) => {
  Object.keys(jsonData).forEach(function (key) {
    console.log(key);
  });
};
