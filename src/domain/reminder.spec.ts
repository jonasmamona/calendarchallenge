import {
  DoesReminderExistForDate,
  OrderRemindersByTime,
  GetRemindersForDate,
  DoesThisDateHaveAReminder,
  DoesThisDateHaveAReminderWithDayIndex,
  CreateReminder,
  EditReminder,
  Reminder,
} from "./reminder";

describe("DoesReminderExistForDate", () => {
  const reminders: Reminder[] = [
    {
      id: "1",
      title: "Reminder 1",
      description: "",
      date: new Date(2023, 1, 1),
      color: "#C8E6C9",
    },
    {
      id: "2",
      title: "Reminder 2",
      description: "",
      date: new Date(2023, 1, 2),
      color: "#F5DD29",
    },
    {
      id: "3",
      title: "Reminder 3",
      description: "",
      date: new Date(2023, 1, 3),
      color: "#FFCC80",
    },
  ];

  test("should return true if a reminder exists for the given date", () => {
    expect(DoesReminderExistForDate(new Date(2023, 1, 2), reminders)).toBe(
      true
    );
  });

  test("should return false if a reminder does not exist for the given date", () => {
    expect(DoesReminderExistForDate(new Date(2023, 1, 4), reminders)).toBe(
      false
    );
  });
});

describe("OrderRemindersByTime", () => {
  const reminders: Reminder[] = [
    {
      id: "1",
      title: "Reminder 1",
      description: "",
      date: new Date(2023, 1, 3, 10, 0),
      color: "#C8E6C9",
    },
    {
      id: "2",
      title: "Reminder 2",
      description: "",
      date: new Date(2023, 1, 2, 12, 0),
      color: "#F5DD29",
    },
    {
      id: "3",
      title: "Reminder 3",
      description: "",
      date: new Date(2023, 1, 1, 9, 0),
      color: "#FFCC80",
    },
  ];

  test("should return reminders sorted by time in ascending order", () => {
    expect(OrderRemindersByTime(reminders)).toEqual([
      {
        id: "3",
        title: "Reminder 3",
        description: "",
        date: new Date(2023, 1, 1, 9, 0),
        color: "#FFCC80",
      },
      {
        id: "2",
        title: "Reminder 2",
        description: "",
        date: new Date(2023, 1, 2, 12, 0),
        color: "#F5DD29",
      },
      {
        id: "1",
        title: "Reminder 1",
        description: "",
        date: new Date(2023, 1, 3, 10, 0),
        color: "#C8E6C9",
      },
    ]);
  });
});

describe("GetRemindersForDate", () => {
  const reminders: Reminder[] = [
    {
      id: "1",
      title: "Reminder 1",
      description: "",
      date: new Date(2023, 1, 1),
      color: "#C8E6C9",
    },
    {
      id: "2",
      title: "Reminder 2",
      description: "",
      date: new Date(2023, 1, 2),
      color: "#F5DD29",
    },
    {
      id: "3",
      title: "Reminder 3",
      description: "",
      date: new Date(2023, 1, 3),
      color: "#FFCC80",
    },
  ];

  test("should return reminders for the given date", () => {
    expect(GetRemindersForDate(new Date(2023, 1, 2), reminders)).toEqual([
      {
        id: "2",
        title: "Reminder 2",
        description: "",
        date: new Date(2023, 1, 2),
        color: "#F5DD29",
      },
    ]);
  });
});

describe("DoesThisDateHaveAReminder", () => {
  const reminders: Reminder[] = [
    {
      id: "1",
      title: "Reminder 1",
      description: "",
      date: new Date(2023, 1, 1),
      color: "#C8E6C9",
    },
    {
      id: "2",
      title: "Reminder 2",
      description: "",
      date: new Date(2023, 1, 2),
      color: "#F5DD29",
    },
    {
      id: "3",
      title: "Reminder 3",
      description: "",
      date: new Date(2023, 1, 3),
      color: "#FFCC80",
    },
  ];

  test("should return true if a reminder exists for the given date", () => {
    expect(DoesThisDateHaveAReminder(new Date(2023, 1, 2), reminders)).toBe(
      true
    );
  });

  test("should return false if a reminder does not exist for the given date", () => {
    expect(DoesThisDateHaveAReminder(new Date(2023, 1, 4), reminders)).toBe(
      false
    );
  });
});

describe("DoesThisDateHaveAReminderWithDayIndex", () => {
  const reminders: Reminder[] = [
    {
      id: "2",
      title: "Reminder 2",
      description: "",
      date: new Date(2023, 1, 2),
      color: "#F5DD29",
    },
  ];

  let date = new Date(2023, 1, 2);

  test("should return true if a reminder exists for the given date", () => {
    expect(DoesThisDateHaveAReminderWithDayIndex(2, date, reminders)).toBe(
      true
    );
  });

  test("should return false if a reminder does not exist for the given date", () => {
    expect(DoesThisDateHaveAReminderWithDayIndex(4, date, reminders)).toBe(
      false
    );
  });
});

describe("CreateReminder", () => {
  test("should return a new reminder with the given title, description, date and color", () => {
    expect(
      CreateReminder(
        "Reminder 1",
        "Description 1",
        new Date(2023, 1, 1),
        "#C8E6C9"
      )
    ).toEqual({
      id: expect.any(String),
      title: "Reminder 1",
      description: "Description 1",
      date: new Date(2023, 1, 1),
      color: "#C8E6C9",
    });
  });
});

describe("EditReminder", () => {
  const reminder: Reminder = {
    id: "1",
    title: "Reminder 1",
    description: "",
    date: new Date(2023, 1, 1),
    color: "#C8E6C9",
  };

  test("should return a new reminder with the given title, description, date and color", () => {
    expect(
      EditReminder(
        reminder,
        "Reminder 2",
        "Description 2",
        new Date(2023, 1, 2),
        "#F5DD29"
      )
    ).toEqual({
      id: "1",
      title: "Reminder 2",
      description: "Description 2",
      date: new Date(2023, 1, 2),
      color: "#F5DD29",
    });
  });
});
