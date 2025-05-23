import styled, { css } from 'styled-components';
import { LinkComponent } from './section';

export interface Puzzle {
  name: string;
  credits: string;
  puzzleLink: string;
  solutionLink: string;
}

const hideSmallCss = css`
  @media (max-width: 960px) {
    display: none;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: Mukta, sans-serif;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;

const TableHeaderCell = styled.th<{ hideSmall?: boolean }>`
  padding: 12px 15px;
  :first-of-type {
    border-top-left-radius: 20px;
  }
  :last-of-type {
    border-top-right-radius: 20px;
  }
  @media (max-width: 960px) {
    padding: 10px 10px;
  }
  ${(props) => props.hideSmall && hideSmallCss}
`;

const TableCell = styled.td<{ hideSmall?: boolean }>`
  padding: 12px 15px;
  border-right: 1px solid ${({ theme }) => theme.colors.grayLight};
  :last-of-type {
    border-right: none;
  }
  @media (max-width: 960px) {
    padding: 5px 5px;
  }
  ${(props) => props.hideSmall && hideSmallCss}
`;

const TableHeaderRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.red};
  color: #ffffff;
  text-align: center;
  font-size: 1.5em;
`;

const TableRow = styled.tr`
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};
  font-size: 1.25em;
  :last-of-type {
    border-bottom: none;
  }
`;

export function PuzzlesTable({ puzzles }: { puzzles: Puzzle[] }) {
  return (
    <Table>
      <thead>
        <TableHeaderRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Credits</TableHeaderCell>
          <TableHeaderCell>Puzzle</TableHeaderCell>
          <TableHeaderCell>Solution</TableHeaderCell>
        </TableHeaderRow>
      </thead>
      <tbody>
        {puzzles.map((puzzle, index) => (
          <TableRow key={index}>
            <TableCell>{puzzle.name}</TableCell>
            <TableCell>{puzzle.credits}</TableCell>
            <TableCell>
              <LinkComponent href={puzzle.puzzleLink} target="_blank">
                Puzzle
              </LinkComponent>
            </TableCell>
            <TableCell>
              {puzzle.solutionLink != '' ? (
                <LinkComponent href={puzzle.solutionLink} target="_blank">
                  Solution
                </LinkComponent>
              ) : (
                <>Coming Soon</>
              )}
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}
