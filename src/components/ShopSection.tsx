import React, { useState } from 'react';
import { Check, Plus, ShoppingBag, X } from 'lucide-react';
import {
  ProductItem,
  SHOP_COLLECTIONS,
  SHOP_PRODUCTS,
} from '../data/mocHoaData';
import { SafeImage } from './SafeImage';

interface ShopSectionProps {
  activeFilter: 'all' | 'clip-card' | 'chenille-flower' | 'combo-moc-yi';
  onFilterChange: (filter: 'all' | 'clip-card' | 'chenille-flower' | 'combo-moc-yi') => void;
  onAddToCart: (product: ProductItem, variant: string, note?: string) => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const ShopSection: React.FC<ShopSectionProps> = ({
  activeFilter,
  onFilterChange,
  onAddToCart,
  onOpenCart,
  cartCount,
}) => {
  const [selectedCollectionTab, setSelectedCollectionTab] = useState<
    'clip-card' | 'chenille-flower' | 'combo-moc-yi'
  >('clip-card');
  const [detailProduct, setDetailProduct] = useState<ProductItem | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string>('');
  const [customMessage, setCustomMessage] = useState<string>('');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const activeCollection =
    SHOP_COLLECTIONS.find((c) => c.id === selectedCollectionTab) || SHOP_COLLECTIONS[0];

  const filteredProducts =
    activeFilter === 'all'
      ? SHOP_PRODUCTS
      : SHOP_PRODUCTS.filter((p) => p.collectionId === activeFilter);

  const openDetailModal = (product: ProductItem) => {
    setDetailProduct(product);
    setSelectedVariant(product.variants[0]);
    setCustomMessage('');
  };

  const handleQuickAdd = (product: ProductItem) => {
    onAddToCart(product, product.variants[0]);
    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 1500);
  };

  const handleDetailAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!detailProduct) return;
    onAddToCart(detailProduct, selectedVariant || detailProduct.variants[0], customMessage.trim());
    setDetailProduct(null);
    onOpenCart();
  };

  return (
    <section id="shop" className="bg-[#F4EBDD] border-b border-[#D8C9B7] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-medium tracking-wider text-[#A77B5B] mb-2">
              02. Shop / Sản phẩm Mộc hoa
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#3F2E24]">
              Ba dòng sản phẩm cốt lõi
            </h2>
          </div>
          <p className="text-sm text-[#735748] max-w-md leading-relaxed">
            Mức giá dễ tiếp cận dành cho học sinh, sinh viên và nhân viên văn phòng trẻ, chăm chút
            trọn vẹn từ chất liệu giấy đến nhành hoa kỷ niệm.
          </p>
        </div>

        {/* Core Collection Spotlight (Full Specification Tabs for Collections 01, 02, 03) */}
        <div className="mb-16 bg-[#FAF5EC] border border-[#D8C9B7] rounded-2xl overflow-hidden">
          <div className="border-b border-[#D8C9B7] px-4 sm:px-8 pt-4 flex flex-wrap gap-2">
            {SHOP_COLLECTIONS.map((col) => {
              const isSelected = selectedCollectionTab === col.id;
              return (
                <button
                  key={col.id}
                  type="button"
                  onClick={() => setSelectedCollectionTab(col.id)}
                  className={`px-4 py-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'border-[#735748] text-[#3F2E24]'
                      : 'border-transparent text-[#735748] hover:text-[#3F2E24]'
                  }`}
                >
                  {col.code} · {col.title}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-stretch">
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] lg:h-full rounded-xl overflow-hidden border border-[#D8C9B7]">
                <SafeImage
                  src={activeCollection.image}
                  alt={activeCollection.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-medium text-[#A77B5B] mb-2">
                <span>{activeCollection.badge}</span>
                <span aria-hidden="true">·</span>
                <span>{activeCollection.englishTitle}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#3F2E24] mb-2">
                {activeCollection.fullHeading}
              </h3>
              <p className="font-serif italic text-base text-[#735748] mb-4">
                {activeCollection.tagline} — {activeCollection.lead}
              </p>
              <p className="text-[15px] leading-relaxed text-[#4A352A] mb-5">
                {activeCollection.intro}
              </p>

              <div className="mb-5">
                <h4 className="text-sm font-semibold text-[#3F2E24] mb-2.5">
                  {activeCollection.bulletTitle}
                </h4>
                <ul className="space-y-1.5 text-sm text-[#4A352A]">
                  {activeCollection.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <span className="text-[#A77B5B] mt-1" aria-hidden="true">
                        •
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#D8C9B7] space-y-2 text-sm text-[#4A352A]">
                <p>{activeCollection.occasions}</p>
                <p className="font-medium text-[#735748]">{activeCollection.specialValue}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Filter & Cart Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#D8C9B7]">
          <div className="flex flex-wrap items-center gap-1.5 bg-[#D8C9B7]/40 p-1 rounded-lg">
            {[
              { key: 'all' as const, label: 'Tất cả sản phẩm' },
              { key: 'clip-card' as const, label: 'Thiệp hoa kẹp' },
              { key: 'chenille-flower' as const, label: 'Hoa kẽm nhung' },
              { key: 'combo-moc-yi' as const, label: 'Combo Mộc Ý' },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => onFilterChange(tab.key)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeFilter === tab.key
                    ? 'bg-[#F4EBDD] text-[#3F2E24] shadow-xs'
                    : 'text-[#735748] hover:text-[#3F2E24]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onOpenCart}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#735748] hover:text-[#3F2E24] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Xem giỏ quà hiện tại ({cartCount} sản phẩm)</span>
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProducts.map((product) => {
            const isAdded = justAddedId === product.id;
            return (
              <article
                key={product.id}
                className="bg-[#FAF5EC] border border-[#D8C9B7] rounded-xl overflow-hidden flex flex-col transition-transform duration-150 hover:-translate-y-0.5"
              >
                <button
                  type="button"
                  onClick={() => openDetailModal(product)}
                  className="aspect-[4/3] w-full overflow-hidden bg-[#D8C9B7]/25 block cursor-pointer"
                >
                  <SafeImage
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </button>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#A77B5B] mb-1">
                      {product.collectionLabel}
                    </p>
                    <h3 className="font-serif text-xl font-semibold text-[#3F2E24] mb-1.5">
                      <button
                        type="button"
                        onClick={() => openDetailModal(product)}
                        className="text-left hover:text-[#735748] transition-colors cursor-pointer"
                      >
                        {product.name}
                      </button>
                    </h3>
                    <p className="text-sm text-[#735748] leading-relaxed mb-4">
                      {product.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#D8C9B7]/70 flex items-center justify-between gap-3">
                    <span className="text-base font-semibold text-[#3F2E24] tabular-nums">
                      {product.priceFormatted}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => openDetailModal(product)}
                        className="px-3 py-2 text-xs font-medium text-[#735748] border border-[#D8C9B7] hover:border-[#735748] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        Chi tiết
                      </button>
                      <button
                        type="button"
                        onClick={() => handleQuickAdd(product)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#F4EBDD] bg-[#735748] hover:bg-[#3F2E24] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Đã thêm</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Thêm vào giỏ</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Product Detail Modal */}
      {detailProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#3F2E24]/50 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pdp-title"
        >
          <div className="bg-[#FAF5EC] border border-[#D8C9B7] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#D8C9B7]">
              <p className="text-xs font-medium text-[#A77B5B]">
                {detailProduct.subtitle}
              </p>
              <button
                type="button"
                onClick={() => setDetailProduct(null)}
                aria-label="Đóng chi tiết sản phẩm"
                className="p-2 rounded-lg text-[#735748] hover:bg-[#D8C9B7]/40 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleDetailAdd} className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6">
              <div className="md:col-span-5">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-[#D8C9B7] mb-4">
                  <SafeImage
                    src={detailProduct.image}
                    alt={detailProduct.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-[#735748] leading-relaxed">
                  {detailProduct.specialValue}
                </p>
              </div>

              <div className="md:col-span-7 flex flex-col justify-between space-y-5">
                <div>
                  <h3 id="pdp-title" className="font-serif text-2xl font-semibold text-[#3F2E24] mb-1">
                    {detailProduct.name}
                  </h3>
                  <p className="text-lg font-semibold text-[#A77B5B] tabular-nums mb-4">
                    {detailProduct.priceFormatted}
                  </p>
                  <p className="text-sm text-[#4A352A] leading-relaxed mb-4">
                    {detailProduct.shortDesc}
                  </p>

                  <ul className="space-y-1.5 text-sm text-[#4A352A] mb-5">
                    {detailProduct.details.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <span className="text-[#A77B5B]">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-[#3F2E24] mb-2">
                      Chọn phiên bản màu sắc &amp; chất liệu
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {detailProduct.variants.map((variant) => (
                        <button
                          key={variant}
                          type="button"
                          onClick={() => setSelectedVariant(variant)}
                          className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                            selectedVariant === variant
                              ? 'bg-[#735748] text-[#F4EBDD] border-[#735748]'
                              : 'bg-[#F4EBDD] text-[#3F2E24] border-[#D8C9B7] hover:border-[#735748]'
                          }`}
                        >
                          {variant}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="pdp-message"
                      className="block text-xs font-semibold text-[#3F2E24] mb-1.5"
                    >
                      Lời chúc viết tay đính kèm (tùy chọn)
                    </label>
                    <textarea
                      id="pdp-message"
                      rows={3}
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                      placeholder="Nhập lời chúc bạn muốn Mộc hoa viết tay lên thiệp..."
                      className="w-full rounded-lg border border-[#D8C9B7] bg-[#F4EBDD] px-3 py-2 text-sm text-[#3F2E24] placeholder:text-[#735748]/60 focus:outline-none focus:ring-2 focus:ring-[#A77B5B]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#D8C9B7]">
                  <button
                    type="button"
                    onClick={() => setDetailProduct(null)}
                    className="px-4 py-2.5 text-xs font-semibold text-[#735748] hover:text-[#3F2E24] cursor-pointer"
                  >
                    Đóng
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold text-[#F4EBDD] bg-[#735748] hover:bg-[#3F2E24] rounded-lg transition-colors cursor-pointer"
                  >
                    Thêm vào giỏ quà · {detailProduct.priceFormatted}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
