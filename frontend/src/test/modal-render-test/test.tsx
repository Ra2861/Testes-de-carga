import { Modal } from '@/components/modal';
import { describe } from 'node:test';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("Modal", ()=>{
    it("should render corretly modal", ()=>{
        render(<Modal />);
        const{ debug} =  render(<Modal/>)
        debug();
    });
    it("exibe o título corretamente", () => {
        render(<Modal />);
        const titulo = screen.getByText("Selecione um arquivo para importação");
        expect(titulo).toBeInTheDocument();
    });
    it("exibe a opção de confirmação corretamente", () => {
        render(<Modal />);
        const opcaoConfirmar = screen.getByText("Importar");
        expect(opcaoConfirmar).toBeInTheDocument();
    });
})