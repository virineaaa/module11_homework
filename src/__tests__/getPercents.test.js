//unit-тесты для getPercents функции

import {getPercents} from "../utils/getPercents.js";

describe('tests for getPercents function', () => {

    it(`30 % from 200 should equal 60`, () => {
        const result = getPercents(30, 200);
        expect(result).toBe(60);
    });

    it(`Type of getPercents should be Number`, () => {
        const result = getPercents(30, 200);
        expect(typeof result).toBe("number");
    });

    it(`60 should be 2 digits long`, () => {
        const result = getPercents(30, 200);
        expect(String(result)).toHaveLength(2);
    });
});
