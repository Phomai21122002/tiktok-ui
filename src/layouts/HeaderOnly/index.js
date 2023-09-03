import Header from '~/layouts/Components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">{children}</div>
        </div>
    );
}

export default HeaderOnly;
