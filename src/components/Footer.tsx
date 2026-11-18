import React, { useState } from 'react';
import { X } from 'lucide-react';
import { POLICY_MODALS } from '../data/mocHoaData';
import { BrandMark } from './BrandMark';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activePolicyKey, setActivePolicyKey] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  const activePolicy = activePolicyKey ? POLICY_MODALS[activePolicyKey] : null;

  return (
    <footer className="bg-[#3F2E24] text-[#F4EBDD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#F4EBDD]/15">
          {/* Brand Summary */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#F4EBDD]">
                <BrandMark className="w-10 h-10" />
              </div>
              <div>
                <p className="font-serif text-xl font-semibold text-[#F4EBDD]">MỘC HOA</p>
                <p className="text-[11px] tracking-widest text-[#E7C5C0]">CRAFT &amp; NOTES</p>
              </div>
            </div>
            <p className="font-serif text-lg text-[#F4EBDD]">Gói dịu dàng gửi yêu thương.</p>
            <p className="text-sm text-[#D8C9B7] leading-relaxed">
              Chạm nét mộc, ủ hương hoa, gửi ngàn lời thương.
            </p>
          </div>

          {/* Khám phá */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold tracking-wider text-[#E7C5C0] uppercase mb-4">
              Khám phá
            </h3>
            <ul className="space-y-2.5 text-sm text-[#D8C9B7]">
              {[
                { label: 'Trang chủ', target: 'home' },
                { label: 'Sản phẩm', target: 'shop' },
                { label: 'Về Mộc hoa', target: 'about' },
                { label: 'Cá nhân hóa', target: 'personalization' },
                { label: 'Mộc Journal', target: 'journal' },
              ].map((link) => (
                <li key={link.target}>
                  <a
                    href={`#${link.target}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.target);
                    }}
                    className="hover:text-[#F4EBDD] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold tracking-wider text-[#E7C5C0] uppercase mb-4">
              Hỗ trợ
            </h3>
            <ul className="space-y-2.5 text-sm text-[#D8C9B7]">
              <li>
                <button
                  type="button"
                  onClick={() => setActivePolicyKey('huong-dan-dat-hang')}
                  className="hover:text-[#F4EBDD] transition-colors cursor-pointer text-left"
                >
                  Hướng dẫn đặt hàng
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActivePolicyKey('chinh-sach-giao-hang')}
                  className="hover:text-[#F4EBDD] transition-colors cursor-pointer text-left"
                >
                  Chính sách giao hàng
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActivePolicyKey('chinh-sach-doi-tra')}
                  className="hover:text-[#F4EBDD] transition-colors cursor-pointer text-left"
                >
                  Chính sách đổi trả
                </button>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('faq');
                  }}
                  className="hover:text-[#F4EBDD] transition-colors"
                >
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a
                  href="#business"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('business');
                  }}
                  className="hover:text-[#F4EBDD] transition-colors"
                >
                  Hợp tác doanh nghiệp
                </a>
              </li>
            </ul>
          </div>

          {/* Kết nối & Newsletter */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold tracking-wider text-[#E7C5C0] uppercase">
              Kết nối cùng Mộc hoa
            </h3>
            <p className="text-xs text-[#D8C9B7] leading-relaxed">
              Facebook · Instagram · TikTok (@mochoacraft). Đăng ký nhận cảm hứng quà tặng thủ công
              mỗi tháng.
            </p>
            {subscribed ? (
              <p className="text-xs font-medium text-[#E7C5C0] bg-[#F4EBDD]/10 px-3 py-2.5 rounded-lg">
                Cảm ơn bạn đã đăng ký nhận tin từ Mộc hoa.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email của bạn"
                  aria-label="Email nhận bản tin Mộc hoa"
                  className="flex-1 min-w-0 rounded-lg bg-[#F4EBDD]/10 border border-[#F4EBDD]/20 px-3 py-2 text-xs text-[#F4EBDD] placeholder:text-[#D8C9B7]/70 focus:outline-none focus:ring-2 focus:ring-[#E7C5C0]"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 text-xs font-semibold bg-[#A77B5B] hover:bg-[#E7C5C0] hover:text-[#3F2E24] text-[#F4EBDD] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Đăng ký
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8C9B7]">
          <p>© 2026 Mộc hoa – Moc Hoa Craft &amp; Notes. All rights reserved.</p>
          <p>Công ty TNHH Thủ công Mộc Hoa</p>
        </div>
      </div>

      {/* Policy Detail Modal */}
      {activePolicy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#3F2E24]/60 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#FAF5EC] text-[#3F2E24] border border-[#D8C9B7] rounded-2xl max-w-lg w-full p-6 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#D8C9B7] mb-4">
              <h4 className="font-serif text-xl font-semibold">{activePolicy.title}</h4>
              <button
                type="button"
                onClick={() => setActivePolicyKey(null)}
                aria-label="Đóng thông tin"
                className="p-1.5 rounded-lg text-[#735748] hover:bg-[#D8C9B7]/40 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3 text-sm leading-relaxed text-[#4A352A]">
              {activePolicy.content.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
