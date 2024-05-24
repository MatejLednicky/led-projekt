/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LedTreatmentApp {
        "basePath": string;
    }
    interface LedTreatmentEditor {
        "entryId": string;
    }
    interface LedTreatmentList {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
export interface LedTreatmentEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLedTreatmentEditorElement;
}
export interface LedTreatmentListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLedTreatmentListElement;
}
declare global {
    interface HTMLLedTreatmentAppElement extends Components.LedTreatmentApp, HTMLStencilElement {
    }
    var HTMLLedTreatmentAppElement: {
        prototype: HTMLLedTreatmentAppElement;
        new (): HTMLLedTreatmentAppElement;
    };
    interface HTMLLedTreatmentEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLLedTreatmentEditorElement extends Components.LedTreatmentEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLLedTreatmentEditorElementEventMap>(type: K, listener: (this: HTMLLedTreatmentEditorElement, ev: LedTreatmentEditorCustomEvent<HTMLLedTreatmentEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLLedTreatmentEditorElementEventMap>(type: K, listener: (this: HTMLLedTreatmentEditorElement, ev: LedTreatmentEditorCustomEvent<HTMLLedTreatmentEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLLedTreatmentEditorElement: {
        prototype: HTMLLedTreatmentEditorElement;
        new (): HTMLLedTreatmentEditorElement;
    };
    interface HTMLLedTreatmentListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLLedTreatmentListElement extends Components.LedTreatmentList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLLedTreatmentListElementEventMap>(type: K, listener: (this: HTMLLedTreatmentListElement, ev: LedTreatmentListCustomEvent<HTMLLedTreatmentListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLLedTreatmentListElementEventMap>(type: K, listener: (this: HTMLLedTreatmentListElement, ev: LedTreatmentListCustomEvent<HTMLLedTreatmentListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLLedTreatmentListElement: {
        prototype: HTMLLedTreatmentListElement;
        new (): HTMLLedTreatmentListElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "led-treatment-app": HTMLLedTreatmentAppElement;
        "led-treatment-editor": HTMLLedTreatmentEditorElement;
        "led-treatment-list": HTMLLedTreatmentListElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface LedTreatmentApp {
        "basePath"?: string;
    }
    interface LedTreatmentEditor {
        "entryId"?: string;
        "onEditor-closed"?: (event: LedTreatmentEditorCustomEvent<string>) => void;
    }
    interface LedTreatmentList {
        "onEntry-clicked"?: (event: LedTreatmentListCustomEvent<string>) => void;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "led-treatment-app": LedTreatmentApp;
        "led-treatment-editor": LedTreatmentEditor;
        "led-treatment-list": LedTreatmentList;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "led-treatment-app": LocalJSX.LedTreatmentApp & JSXBase.HTMLAttributes<HTMLLedTreatmentAppElement>;
            "led-treatment-editor": LocalJSX.LedTreatmentEditor & JSXBase.HTMLAttributes<HTMLLedTreatmentEditorElement>;
            "led-treatment-list": LocalJSX.LedTreatmentList & JSXBase.HTMLAttributes<HTMLLedTreatmentListElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
