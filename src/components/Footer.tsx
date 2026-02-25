export function Footer() {
  return (
    <footer className="border-t border-dark-700 mt-12 py-6">
      <div className="max-w-[1600px] mx-auto px-4 flex flex-col items-center gap-3">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
          <a href="/" className="text-xs text-text-muted hover:text-accent-amber transition-colors">Home</a>
          <a href="/armor-tracker/" className="text-xs text-text-muted hover:text-accent-amber transition-colors">Armour Tracker</a>
          <a href="/exec-hangar-tracker/" className="text-xs text-text-muted hover:text-accent-amber transition-colors">Exec Hangar Tracker</a>
          <a href="/wikelo-tracker/" className="text-xs text-text-muted hover:text-accent-amber transition-colors">Wikelo Tracker</a>
          <a href="/loadout-planner/" className="text-xs text-text-muted hover:text-accent-amber transition-colors">Loadout Planner</a>
          <a href="https://www.youtube.com/@undisputednoobs" target="_blank" rel="noopener noreferrer" className="text-xs text-text-muted hover:text-accent-amber transition-colors">YouTube</a>
        </div>
        <p className="text-[10px] text-text-muted/50">Unofficial fan-made tool. Not affiliated with Cloud Imperium Games.</p>
      </div>
    </footer>
  );
}
