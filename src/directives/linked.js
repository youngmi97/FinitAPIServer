const { SchemaDirectiveVisitor } = require("apollo-server-express");
import { defaultFieldResolver } from "graphql";
import { checkAccountLinked } from "../auth";

// The following directive checks that the user does not have an empty Accounts List
// Empty Accounts List ==> Not yet linked
// Logically Sound ??

class LinkedDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = function (...args) {
      const [, , context] = args;

      // checkAccountLinked argument should be userId
      checkAccountLinked(context.req);

      return resolve.apply(this, args);
    };
  }
}

export default LinkedDirective;
