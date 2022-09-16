import { useState, useEffect } from "react";
import styled from "styled-components";
import TableUrls from "./components/TableUrls";
import Modal from "./components/Modal";
import { getAllUrlsAndMapping, getUrlById } from "./utils/utils";
function App() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [newId, setNewId] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const dataUtils = await getAllUrlsAndMapping();
      setData(dataUtils.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (newId) {
      const fetchUrlById = async () => {
        const url = await getUrlById(newId);
        const newRow = { ...url, _id: newId };
        setData([...data, newRow]);
        setNewId();
      };
      fetchUrlById();
    }
  }, [newId]);

  return (
    <Div>
      <WrapInput>
        <Input type="button" value=" Add URL " onClick={() => setModal(true)} />
      </WrapInput>

      <Modal show={modal} setShow={setModal} setNewId={setNewId} />
      <TableUrls data={data} />
    </Div>
  );
}

export default App;

const Div = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  color: white;
`;
const Input = styled.input`
  cursor: pointer;
  padding: 5px 10px;
  color: white;
  background-color: red;
`;
const WrapInput = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`;
