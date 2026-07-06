/**
 * A tiny piece of application logic, just so the demo project has
 * something real for CI to lint, test, and build.
 */
export function greet(name) {
    if (!name.trim()) {
        throw new Error("name must not be empty");
    }
    return `Hello, ${name}!`;
}
