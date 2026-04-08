
export default function PageRightSidebar() {
    return (
        <aside className="hidden xl:flex flex-col w-80 h-full p-8 gap-8 overflow-y-auto border-l border-[#3b4a47]/10">
            <div>
                <h2 className="text-[#46eedd] font-black font-['Manrope'] text-sm uppercase tracking-widest mb-6">
                    Trending Topics
                </h2>
                <div className="space-y-6">
                    <TrendingItem
                        tag="#brutalism_minimal"
                        category="Architecture"
                        views="1.2M"
                    />
                    <TrendingItem
                        tag="#quiet_luxury_escapes"
                        category="Travel"
                        views="856k"
                    />
                    <TrendingItem
                        tag="#curated_living"
                        category="Lifestyle"
                        views="2.4M"
                    />
                </div>
            </div>

            <div className="bg-[#131b2e] p-6 rounded-2xl border border-[#3b4a47]/5">
                <h3 className="text-white font-bold mb-2">Editorial Picks</h3>
                <p className="text-xs text-[#bacac6] mb-4 leading-relaxed">
                    Hand-selected creators pushing boundaries.
                </p>
                <button className="w-full py-2 bg-[#2d3449] text-[#46eedd] text-xs font-bold rounded-lg hover:bg-[#31394d] transition-colors">
                    Explore Gallery
                </button>
            </div>
        </aside>
    )
}

const TrendingItem = ({
    tag,
    category,
    views,
}: {
    tag: string
    category: string
    views: string
}) => (
    <div className="group cursor-pointer">
        <p className="text-[10px] font-bold text-[#859491] uppercase tracking-widest mb-1">
            {category}
        </p>
        <h4 className="text-[#dae2fd] font-semibold group-hover:text-[#46eedd] transition-colors">
            {tag}
        </h4>
        <p className="text-xs text-[#bacac6] mt-1">{views} views</p>
    </div>
)
