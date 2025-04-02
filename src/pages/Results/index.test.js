import { formatJobTitle, formatQueryParams } from ".";

describe("Test de formatJobTitle", () => {
    test("Ajout d'une virgule à un item", () => {
        const expectedState = "item2,";
        expect(formatJobTitle("item2", 3, 1)).toEqual(expectedState);
    });

    test("Ne pas ajouter de virgule au dernier item", () => {
        const expectedState = "item3";
        expect(formatJobTitle("item3", 3, 2)).toEqual(expectedState);
    });

    it("should add a comma to an item", () => {
        const expectedState = "item2,";
        expect(formatJobTitle("item2", 3, 1)).toEqual(expectedState);
    });

    it("shouldn't add a comma to the last item of the list", () => {
        const expectedState = "item3";
        expect(formatJobTitle("item3", 3, 2)).toEqual(expectedState);
    });
});

describe("Test de formatQueryParams", () => {
    it("shouldn't add a separator to first answer", () => {
        const expectedState = "a1=answer1";
        expect(formatQueryParams({ 1: "answer1" })).toEqual(expectedState);
    });

    it("should add & separator to next answers", () => {
        const expectedState = "a1=answer1&a2=answer2";
        expect(formatQueryParams({ 1: "answer1", 2: "answer2" })).toEqual(
            expectedState
        );
    });
});
