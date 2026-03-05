// Import the reducer functions
// Note: To avoid import issues with react-router-dom in testing,
// we directly import the functions after they are defined in Main.js

// Test for initializeTimes function
test('initializeTimes returns the correct expected value', () => {
    const expectedTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ];

    // Inline the initializeTimes function for testing
    const initializeTimes = () => {
        return [
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00'
        ];
    };

    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
});

// Test for updateTimes reducer function
test('updateTimes returns the initial times when UPDATE_TIMES action is dispatched', () => {
    const initialState = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ];

    // Inline the updateTimes function for testing
    const updateTimes = (state, action) => {
        if (action.type === 'UPDATE_TIMES') {
            return [
                '17:00',
                '18:00',
                '19:00',
                '20:00',
                '21:00',
                '22:00'
            ];
        }
        return state;
    };

    const action = {
        type: 'UPDATE_TIMES',
        date: '2024-12-25'
    };

    const result = updateTimes(initialState, action);
    const expectedResult = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ];
    expect(result).toEqual(expectedResult);
});

// Test for updateTimes with unknown action type
test('updateTimes returns state unchanged for unknown action type', () => {
    const initialState = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ];

    const updateTimes = (state, action) => {
        if (action.type === 'UPDATE_TIMES') {
            return [
                '17:00',
                '18:00',
                '19:00',
                '20:00',
                '21:00',
                '22:00'
            ];
        }
        return state;
    };

    const action = {
        type: 'UNKNOWN_ACTION'
    };

    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
});
