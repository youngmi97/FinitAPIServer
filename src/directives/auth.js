// Schema Directives in Apollo Server

const { SchemaDirectiveVisitor } = require("apollo-server-express");
import { defaultFieldResolver } from 'graphql';
import { checkSignedIn } from '../auth';


// SchemaDirectiveVisitor is the base class exposed by Apollo for all custom directives
class AuthDirective extends SchemaDirectiveVisitor {
    // Take out the resolver function from the field and override with custom function
    visitFieldDefinition (field) {
        // represent field to which auth method is being applied to --> e.g.) me query , signUp mutation etc.
        const { resolve = defaultFieldResolver } = field
        // classic arguments (root, args, context, info) combined using rest operator 
        field.resolve = function (...args) {
            const [, , context] = args

            checkSignedIn(context.req)

            // 'this' applies to the 'field' at hand 
            return resolve.apply(this, args)
        }
    }
}


export default AuthDirective