import { TodosService } from "./todos.service";
import { createService } from "../lib/src/service";

class OtherService {
  add() {}
}

describe("TodosService", () => {
  const spectator = createService({
    service: TodosService,
    mocks: [OtherService]
  });
  // const spectator = createService<TodosService>(TodosService);

  it("should", () => {
    // let otherService = spectator.get<OtherService>(OtherService);
    // otherService.add.and.callThrough();
    // otherService.add.and.callFake(() => fake);
    // otherService.add.and.throwError('Error');
    // otherService.add.andCallFake(() => fake);
    spectator.service.remove();
  });
});
