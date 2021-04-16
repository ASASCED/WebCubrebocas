export const Products = () => {
  return (
    <div className="products">
      <div className="top-bar">
        <h1>Brimar</h1>
      </div>

      <div className="prod">
        <img
          src="https://cdn.shopify.com/s/files/1/0025/1710/6777/products/MascarillaN95KN95Cubrebocas.png?v=1588263033"
          alt=""
        />

        <div className="move">
          <button>
            <i class="fas fa-chevron-circle-left"></i>
          </button>
          <button>
            <i class="fas fa-chevron-circle-right"></i>
          </button>
        </div>
      </div>

      <div className="desc">
        <h4>Descripcion</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam
          nostrum in dolore unde, libero ea nihil, fuga, deleniti omnis optio
          laboriosam voluptates ipsum! Assumenda voluptas aspernatur, officiis
          natus qui totam expedita iusto in non corporis labore voluptate
          impedit pariatur perspiciatis fugiat, reprehenderit rerum doloremque
          nesciunt eveniet reiciendis aperiam ullam!
        </p>
        <button>comprar</button>
      </div>

      <div className="categories">
        <h4>Categorias</h4>
        <div className="category">Medicamentos</div>
        <div className="category">Medicamentos</div>
        <div className="category">Medicamentos</div>
        <div className="category">Medicamentos</div>
        <div className="category">Medicamentos</div>
        <div className="category">Medicamentos</div>
      </div>

      <div className="prod-list">
        <div className="item">
          <img src="" alt="" />
          <div className="content">
            <h5>Gel</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              deserunt cum quis consectetur ipsa voluptates repudiandae
              voluptate distinctio provident in, necessitatibus cumque aperiam
              ea eum velit eligendi, neque recusandae ex laudantium porro fuga
              eius. Sint eius illo debitis soluta repudiandae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
