/// <reference path="../support/index.d.ts" />

import { User } from "../support/models/user";

describe('ASYNC CRUD', () => {
    it('ASYNC COMMAND RESPONSE', () => {
        cy.hitapi('/api/users/2').should((res) => {
            const userRes: User = res.body.data;;
            expect(userRes.id).to.equal(2);
            expect(userRes.first_name).to.equal("Janet");
            cy.log(`${userRes}`);
        })
        cy.google();
    })
});
