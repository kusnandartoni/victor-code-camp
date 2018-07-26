import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { Button } from 'antd';

class Banner extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="page">
                    <h1 className="display-3 text-center">Hello, Anak Kos!</h1>
                    <p className="lead text-center">Jangan cuma jadi kupu-kupu (kuliah-pulang) yang ga tau tujuan, ayo sama-sama belajar ala anak kos</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                    <Button type="primary">Learn More</Button>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}

export default Banner;