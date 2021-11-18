import axios from "axios";
import UnicornService from "./index";

const service = new UnicornService();

describe("axios get", () => {
  test("should return data from server", async () => {
    const data = await service.getUnicorns();
    expect(data).toEqual([
      {
        _id: "613efa9cdc46c203e8b3d6eb",
        name: "Sparkle Angel",
        age: 2,
        colour: "blue",
      },
    ]);
  });

  test("should catch error", async () => {
    try {
      await service.getUnicorns();
    } catch (error) {
      expect(error.message).toBe("Error: Network Error can not get unicorns");
    }
  });
});

describe("axios delete", () => {
  test("should should have OK status", async () => {
    const result = await service.deleteUnicorn("613efa9cdc46c203e8b3d6eb");
    expect(result.statusText).toBe("OK");
  });
});
