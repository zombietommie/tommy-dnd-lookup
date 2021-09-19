import { Layout, Menu } from "antd";
import "./App.css";

function App() {
    const { Header, Content } = Layout;
    return (
        <div className="App">
            <Layout>
                <Header>
                    <h2>Tommy's D&D Lookup</h2>
                    <Menu mode="horizontal">
                        Menu
                        <Menu.Item>Menu item</Menu.Item>
                    </Menu>
                </Header>
                <Content>Applle sauce</Content>
            </Layout>
        </div>
    );
}

export default App;
