import { RenderInstruction, ValidationError } from "aurelia-validation";
export declare class FSValidationRenderer {
    constructor();
    render(instruction: RenderInstruction): void;
    add(element: Element, error: ValidationError): void;
    remove(element: Element, error: ValidationError): void;
}
