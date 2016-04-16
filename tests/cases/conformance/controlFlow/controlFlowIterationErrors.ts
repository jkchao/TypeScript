let cond: boolean;

function len(s: string) {
    return s.length;
}

function f1() {
    let x: string | number | boolean;
    x = "";
    while (cond) {
        x = len(x);
        x;
    }
    x;
}

function f2() {
    let x: string | number | boolean;
    x = "";
    while (cond) {
        x;
        x = len(x);
    }
    x;
}

declare function foo(x: string): number;
declare function foo(x: number): string;

function g1() {
    let x: string | number | boolean;
    x = "";
    while (cond) {
        x = foo(x);
        x;
    }
    x;
}

function g2() {
    let x: string | number | boolean;
    x = "";
    while (cond) {
        x;
        x = foo(x);
    }
    x;
}
