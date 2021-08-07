import Mode1ModelGenerated from "./generated/Mode1ModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await Mode1ModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...Mode1ModelGenerated,
  ...customModel
};
