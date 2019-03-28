import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const headers = [
    {
        label: 'Name',
        find: 'name',
    },
    {
        label: 'Points',
        find: 'points',
    },
    {
        label: 'Rank',
        find: 'rank',
    },
];

const LeaderBoard = ({ data }) => (
    <Table striped bordered condensed hover>
        <thead>
        <tr>
            {
                headers.map(h => (
                    <th key={h.label}>{h.label}</th>
                ))
            }
        </tr>
        </thead>
        <tbody>
        {
            data.map((d, rowIndex) => (
                <tr>
                    {
                        headers.map(col => (
                            <td key={`${col.find}-${rowIndex}`}>
                                {d[col.find]}
                            </td>
                        ))
                    }
                </tr>
            ))
        }
        </tbody>
    </Table>
);

LeaderBoard.propTypes = {
    data: PropTypes.array,
};

LeaderBoard.defaultProps = {
    data: [
        {
            name: 'Nitin',
            rank: 1,
            points: 800,
        },
        {
            name: 'Akshay',
            rank: 2,
            points: 600,
        },
        {
            name: 'Sachin',
            rank: 3,
            points: 900,
        },
        {
            name: 'Nitin',
            rank: 1,
            points: 800,
        },
        {
            name: 'Akshay',
            rank: 2,
            points: 600,
        },
        {
            name: 'Sachin',
            rank: 3,
            points: 900,
        },
        {
            name: 'Nitin',
            rank: 1,
            points: 800,
        },
        {
            name: 'Akshay',
            rank: 2,
            points: 600,
        },
        {
            name: 'Sachin',
            rank: 3,
            points: 900,
        },
        {
            name: 'Nitin',
            rank: 1,
            points: 800,
        },
        {
            name: 'Akshay',
            rank: 2,
            points: 600,
        },
        {
            name: 'Sachin',
            rank: 3,
            points: 900,
        },
        {
            name: 'Nitin',
            rank: 1,
            points: 800,
        },
        {
            name: 'Akshay',
            rank: 2,
            points: 600,
        },
        {
            name: 'Sachin',
            rank: 3,
            points: 900,
        },
        {
            name: 'Nitin',
            rank: 1,
            points: 800,
        },
        {
            name: 'Akshay',
            rank: 2,
            points: 600,
        },
        {
            name: 'Sachin',
            rank: 3,
            points: 900,
        },
        {
            name: 'Nitin',
            rank: 1,
            points: 800,
        },
        {
            name: 'Akshay',
            rank: 2,
            points: 600,
        },
        {
            name: 'Sachin',
            rank: 3,
            points: 900,
        },
    ]
};

export default LeaderBoard;