import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const MerchSection = () => {
  const products = [
    {
      id: "1",
      name: 'Футболка "Космическая Одиссея"',
      artist: "Звездный Экипаж",
      price: 1990,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
    },
    {
      id: "2",
      name: 'Худи "Галактический Блюз"',
      artist: "Небесные Странники",
      price: 3500,
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop",
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
    },
    {
      id: "3",
      name: 'Виниловая пластинка "Симфония"',
      artist: "Орбитальный Оркестр",
      price: 2800,
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      sizes: [],
      inStock: false,
    },
    {
      id: "4",
      name: "Кружка с логотипом лейбла",
      artist: "Music Label",
      price: 890,
      image:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop",
      sizes: [],
      inStock: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Мерч</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Icon name="Filter" size={16} className="mr-2" />
            Фильтры
          </Button>
          <Button variant="outline" size="sm">
            <Icon name="ShoppingCart" size={16} className="mr-2" />
            Корзина (2)
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="bg-gray-800 border-gray-700 overflow-hidden group hover:bg-gray-750 transition-all"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                  <span className="text-white font-medium bg-red-600 px-3 py-1 rounded-full text-sm">
                    Нет в наличии
                  </span>
                </div>
              )}
              <div className="absolute top-2 right-2">
                <Button
                  size="sm"
                  variant="ghost"
                  className="bg-black bg-opacity-50 text-white hover:bg-opacity-70"
                >
                  <Icon name="Heart" size={14} />
                </Button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-white mb-1 text-sm leading-tight">
                {product.name}
              </h3>
              <p className="text-gray-400 text-xs mb-2">{product.artist}</p>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#9b87f5] font-bold">
                  {product.price}₽
                </span>
                {product.inStock && (
                  <span className="text-green-400 text-xs">В наличии</span>
                )}
              </div>

              {product.sizes.length > 0 && (
                <div className="mb-3">
                  <p className="text-gray-400 text-xs mb-1">Размеры:</p>
                  <div className="flex space-x-1">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className="bg-gray-700 text-white text-xs px-2 py-1 rounded"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <Button
                size="sm"
                className="w-full bg-[#9b87f5] hover:bg-[#8b5cf6]"
                disabled={!product.inStock}
              >
                <Icon name="ShoppingCart" size={14} className="mr-2" />
                {product.inStock ? "В корзину" : "Недоступно"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MerchSection;
