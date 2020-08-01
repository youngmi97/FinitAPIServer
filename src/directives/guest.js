const { SchemaDirectiveVisitor } = require("apollo-server-express");
import { defaultFieldResolver } from "graphql";
import { checkSignedOut } from "../auth";

class GuestDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = function (...args) {
      const [, , context] = args;

      checkSignedOut(context.req);

      return resolve.apply(this, args);
    };
  }
}

export default GuestDirective;
