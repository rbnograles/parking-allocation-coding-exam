export const ParkingSlots = [
    {
        name: "Gate A",
        slots: [
            {
                name: "A11",
                occupied: true,
                parkingType: "SP",
                vehicleSizedLimit: ["S"],
                occupyingType: "S",
                col: 1,
                row: 1,
                dateParked: new Date("August 1, 2022 03:00:00"),
                currentOccupyingCar: "XYZ"
            },
            {
                name: "A12",
                occupied: false,
                parkingType: "LP",
                vehicleSizedLimit: ["S", "M", "L"],
                col: 1,
                row: 2,
                dateParked: null,
            },
            {
                name: "A13",
                occupied: false,
                parkingType: "SP",
                vehicleSizedLimit: ["S"],
                col: 1,
                row: 3,
                dateParked: null,
            },
            {
                name: "A21",
                occupied: false,
                parkingType: "MP",
                vehicleSizedLimit: ["S", "M"],
                col: 2,
                row: 1,
                dateParked: null,
            },
            {
                name: "A22",
                occupied: false,
                parkingType: "LP",
                vehicleSizedLimit: ["S", "M", "L"],
                col: 2,
                row: 2,
                dateParked: null,
            },
            {
                name: "A23",
                occupied: false,
                parkingType: "MP",
                vehicleSizedLimit: ["S", "M"],
                col: 2,
                row: 3,
                dateParked: null,
            },
            {
                name: "A31",
                occupied: false,
                parkingType: "SP",
                vehicleSizedLimit: ["S"],
                col: 3,
                row: 1,
                dateParked: null,
            },
            {
                name: "A32",
                occupied: false,
                parkingType: "LP",
                vehicleSizedLimit: ["S", "M", "L"],
                col: 3,
                row: 2,
                dateParked: null,
            },
            {
                name: "A33",
                occupied: false,
                parkingType: "MP",
                vehicleSizedLimit: ["S", "M"],
                col: 3,
                row: 3,
                dateParked: null,
            }
        ],
    },
    {
        name: "Gate B",
        slots: [
            {
                name: "B11",
                occupied: false,
                parkingType: "SP",
                vehicleSizedLimit: ["S"],
                col: 1,
                row: 1,
                dateParked: null,
            },
            {
                name: "B12",
                occupied: false,
                parkingType: "LP",
                vehicleSizedLimit: ["S", "M", "L"],
                col: 1,
                row: 2,
                dateParked: null,
            },
            {
                name: "B13",
                occupied: false,
                parkingType: "SP",
                vehicleSizedLimit: ["S"],
                col: 1,
                row: 3,
                dateParked: null,
            },
            {
                name: "B21",
                occupied: false,
                parkingType: "MP",
                vehicleSizedLimit: ["S", "M"],
                col: 2,
                row: 1,
                dateParked: null,
            },
            {
                name: "B22",
                occupied: false,
                parkingType: "LP",
                vehicleSizedLimit: ["S", "M", "L"],
                col: 2,
                row: 2,
                dateParked: null,
            },
            {
                name: "B23",
                occupied: false,
                parkingType: "MP",
                vehicleSizedLimit: ["S", "M"],
                col: 2,
                row: 3,
                dateParked: null,
            },
            {
                name: "B31",
                occupied: false,
                parkingType: "SP",
                vehicleSizedLimit: ["S"],
                col: 3,
                row: 1,
                dateParked: null,
            },
            {
                name: "B32",
                occupied: false,
                parkingType: "LP",
                vehicleSizedLimit: ["S", "M", "L"],
                col: 3,
                row: 2,
                dateParked: null,
            },
            {
                name: "B33",
                occupied: false,
                parkingType: "MP",
                vehicleSizedLimit: ["S", "M"],
                col: 3,
                row: 3,
                dateParked: null,
            }
        ],
    },
    {
        name: "Gate C",
        slots: [
            {
                name: "C11",
                occupied: false,
                parkingType: "SP",
                vehicleSizedLimit: ["S"],
                col: 1,
                row: 1,
                dateParked: null,
            },
            {
                name: "C12",
                occupied: false,
                parkingType: "LP",
                vehicleSizedLimit: ["S", "M", "L"],
                col: 1,
                row: 2,
                dateParked: null,
            },
            {
                name: "C13",
                occupied: false,
                parkingType: "SP",
                vehicleSizedLimit: ["S"],
                col: 1,
                row: 3,
                dateParked: null,
            },
            {
                name: "C21",
                occupied: false,
                parkingType: "MP",
                vehicleSizedLimit: ["S", "M"],
                col: 2,
                row: 1,
                dateParked: null,
            },
            {
                name: "C22",
                occupied: false,
                parkingType: "LP",
                vehicleSizedLimit: ["S", "M", "L"],
                col: 2,
                row: 2,
                dateParked: null,
            },
            {
                name: "C23",
                occupied: false,
                parkingType: "MP",
                vehicleSizedLimit: ["S", "M"],
                col: 2,
                row: 3,
                dateParked: null,
            },
            {
                name: "C31",
                occupied: false,
                parkingType: "SP",
                vehicleSizedLimit: ["S"],
                col: 3,
                row: 1,
                dateParked: null,
            },
            {
                name: "C32",
                occupied: false,
                parkingType: "LP",
                vehicleSizedLimit: ["S", "M", "L"],
                col: 3,
                row: 2,
                dateParked: null,
            },
            {
                name: "C33",
                occupied: false,
                parkingType: "MP",
                vehicleSizedLimit: ["S", "M"],
                col: 3,
                row: 3,
                dateParked: null,
            }
        ],
    }
];

export const parkingHistoryList = [
    {
        plateNumber: "XYZ",
        date: new Date("August 5, 2022 13:02:00"),
    }
]