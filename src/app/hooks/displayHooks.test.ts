import { describe, expect, it } from "vitest"
import { useHeaderContents } from "./displayHooks";
import { renderHook } from "@testing-library/react";

describe('useHeaderContents', () => {
    it('should return title', () => {
        // Arrange & Act
        const {result} = renderHook(() => useHeaderContents())

        // Assert
        expect(result.current.title).toBeDefined();
        expect(result.current.title).not.toBeFalsy();
    });

    it('should return body', () => {
        // Arrange & Act
        const {result} = renderHook(() => useHeaderContents())

        // Assert
        expect(result.current.body).toBeDefined();
        expect(result.current.body).not.toBeFalsy();
    });

    it('should return backgroundImage', () => {
        // Arrange & Act
        const {result} = renderHook(() => useHeaderContents())

        // Assert
        expect(result.current.backgroundImage).toBeDefined();
        expect(result.current.backgroundImage).not.toBeFalsy();
    });
})