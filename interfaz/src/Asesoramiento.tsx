import React, { useState } from 'react';
import { Container, Form, Button, Card, Accordion, Modal, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AsesoramientoApp = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    imagenes: []
  });
  const [previewImages, setPreviewImages] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    
    const newImages = [...formData.imagenes, ...files];
    setFormData({
      ...formData,
      imagenes: newImages
    });

    // Crear vistas previas
    const imagePreviews = files.map(file => URL.createObjectURL(file));
    setPreviewImages([...previewImages, ...imagePreviews]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.titulo || !formData.descripcion) {
      alert('Por favor complete título y descripción');
      return;
    }
    
    const newEntry = {
      ...formData,
      id: Date.now(),
      previewImages: [...previewImages]
    };
    
    setSubmittedData([newEntry, ...submittedData]);
    setFormData({
      titulo: '',
      descripcion: '',
      imagenes: []
    });
    setPreviewImages([]);
  };

  const openImageModal = (img) => {
    setModalImage(img);
    setShowModal(true);
  };

  const removeImage = (index) => {
    const newImages = [...formData.imagenes];
    newImages.splice(index, 1);
    
    const newPreviews = [...previewImages];
    newPreviews.splice(index, 1);
    
    setFormData({
      ...formData,
      imagenes: newImages
    });
    setPreviewImages(newPreviews);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Sistema de Asesoramiento</h1>
      
      <Card className="mb-4">
        <Card.Header>Nuevo Asesoramiento</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                placeholder="Ingrese el título"
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                placeholder="Describa el asesoramiento"
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Imágenes (Máx. 5)</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                multiple
                disabled={formData.imagenes.length >= 5}
              />
              <Form.Text className="text-muted">
                {formData.imagenes.length}/5 imágenes seleccionadas
              </Form.Text>
            </Form.Group>
            
            {/* Vista previa de imágenes */}
            {previewImages.length > 0 && (
              <div className="mb-3">
                <h6>Vista previa:</h6>
                <div className="d-flex flex-wrap gap-2">
                  {previewImages.map((img, index) => (
                    <div key={index} className="position-relative" style={{ width: '100px' }}>
                      <Image 
                        src={img} 
                        thumbnail 
                        onClick={() => openImageModal(img)}
                        style={{ cursor: 'pointer' }}
                      />
                      <Button 
                        variant="danger" 
                        size="sm" 
                        className="position-absolute top-0 end-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeImage(index);
                        }}
                        style={{ transform: 'translate(50%, -50%)' }}
                      >
                        ×
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit">
                Guardar Asesoramiento
                </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      
      {/* Lista de asesoramientos guardados */}
      <h2 className="mb-3">Asesoramientos Guardados</h2>
      {submittedData.length === 0 ? (
        <p>No hay asesoramientos guardados aún.</p>
      ) : (
        <Accordion defaultActiveKey="0">
          {submittedData.map((item, index) => (
            <Accordion.Item eventKey={index.toString()} key={item.id}>
              <Accordion.Header>{item.titulo}</Accordion.Header>
              <Accordion.Body>
                <p>{item.descripcion}</p>
                
                {item.previewImages.length > 0 && (
                  <>
                    <h6>Imágenes adjuntas:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {item.previewImages.map((img, imgIndex) => (
                        <Image 
                          key={imgIndex}
                          src={img} 
                          thumbnail 
                          onClick={() => openImageModal(img)}
                          style={{ cursor: 'pointer', maxWidth: '150px' }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
      
      {/* Modal para ver imagen en grande */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Vista previa de imagen</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Image src={modalImage} fluid />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AsesoramientoApp;