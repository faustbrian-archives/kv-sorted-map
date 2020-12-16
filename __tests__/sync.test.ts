import { complianceTestsSync } from "@konceiver/kv-test-suite";
import { StoreSync } from "../src/sync";

complianceTestsSync(() => StoreSync.new<string, string>(), {
	key1: "value1",
	key2: "value2",
	key3: "value3",
	key4: "value4",
	key5: "value5",
});
