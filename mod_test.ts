import { assertEquals } from "https://deno.land/std@0.82.0/testing/asserts.ts";

Deno.test("myTestFunction", (): void => {
  assertEquals("foo bar", "foo bar");
});
