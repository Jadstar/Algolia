export function hitTemplate(hit) {
  return `
    <div class="card thumbnail card-body text-center">
      <a class="thumbnail-image pb-2">
        <img src="${hit.image}" >
        </a>

      
        
          <p class="card-title h4">${hit._highlightResult.title.value}</p>
          <p style="margin:0;font-size:0.75rem;cursor:pointer;">${hit._highlightResult.SKU.value}</p>
        <p style="height:80px" class="price">$${hit.price}</div>
      
    </div>
  `;
}
