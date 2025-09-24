import { Header } from './Header';
import {cleanup, render, screen} from '@testing-library/react'
import { it, describe, expect, afterEach } from 'vitest'



describe('Header', () => {
    afterEach((cleanup));

    it('should display title', () => {

        // Arrange
        const title = 'Hello World';
        const body = ''

        // Act
        render(<Header title={title} body={body}></Header>);

        // Assert
        expect(screen.getByText(title)).toBeDefined();
    })

    it('should display body', () => {

        // Arrange
        const title = '';
        const body = 'This is a body!'

        // Act
        render(<Header title={title} body={body}></Header>);

        // Assert
        expect(screen.getByText(body)).toBeDefined();
    });

    it('should display background image', () => {

        // Arrange
        const title = 'Hello World';
        const body = 'This is a body!'
        const backgroundImage = 'hello.jpg'

        // Act
        render(<Header title={title} body={body} backgroundImage={backgroundImage} />);
        const style = window.getComputedStyle(screen.getByTestId('header'));

        // Assert
        expect(style.backgroundImage).toBe(`url("${backgroundImage}")`);
    });
})