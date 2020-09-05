import { assertEquals } from "https://deno.land/std@v0.68.0/testing/asserts.ts";

Deno.test("myTestFunction", (): void => {
  assertEquals("foo bar", "foo bar");
});
