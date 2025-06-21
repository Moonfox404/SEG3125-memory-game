import React from "react";

type InfoModalProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const InfoModal = ({ isOpen, setIsOpen }: InfoModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center animate-fade-in"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-base-100 dark:bg-base-200 p-6 rounded-2xl shadow-xl w-11/12 max-w-5xl max-h-[90vh] overflow-y-auto animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-xl md:max-w-3xl mx-auto my-4 sm:my-6 bg-transparent flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            How to Play
          </h2>

          {/* Objective */}
          <section>
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Objective
            </h3>
            <p className="text-base-content leading-relaxed">
              Find and pair all matching objects hidden beneath the cups before
              the board is cleared. Matches remove cups and earn you points;
              mismatches may trigger surprise swaps if enabled.
            </p>
          </section>

          {/* Getting Started */}
          <section>
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Getting Started
            </h3>
            <ol className="list-decimal list-inside text-base-content space-y-2 md:space-y-3">
              <li>Launch the Game by selecting “Play” from the main menu.</li>
              <li>
                Select Your Settings:
                <ul className="list-disc list-inside mt-1 ml-5 space-y-1">
                  <li>
                    <strong>Board Size:</strong> Small (2×6), Medium (3×6),
                    Large (4×6)
                  </li>
                  <li>
                    <strong>Swaps per Turn:</strong> 0, 1, 2
                  </li>
                  <li>
                    <strong>Theme:</strong> Fruit, Animal, Heart
                  </li>
                </ul>
              </li>
            </ol>
          </section>

          {/* Controls */}
          <section>
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Controls
            </h3>
            <ul className="list-disc list-inside text-base-content space-y-2">
              <li>Tap a cup to reveal the hidden object.</li>
              <li>
                Tap a second cup to reveal its object and check for a match.
              </li>
            </ul>
          </section>

          {/* Gameplay Rules */}
          <section>
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Gameplay Rules
            </h3>
            <ol className="list-decimal list-inside text-base-content space-y-2 md:space-y-3">
              <li>
                If objects match, cups are removed and you earn{" "}
                <strong>points</strong>.
              </li>
              <li>
                If objects don’t match, cups flip back. If swaps are enabled,
                the game randomly swaps that many pairs before your next move.
              </li>
              <li>Continue flipping until all cups are removed.</li>
            </ol>
          </section>

          {/* Scoring & Results */}
          <section>
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Scoring &amp; Results
            </h3>
            <p className="text-base-content leading-relaxed mb-2">
              After you win, view your <strong>current score</strong> and{" "}
              <strong>highest score</strong>.
            </p>
          </section>

          {/* Winning the Game */}
          <section>
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Winning the Game
            </h3>
            <p className="text-base-content leading-relaxed">
              Match and remove all cups. The result screen will show your score
              breakdown and options to <strong>Play Again</strong> or{" "}
              <strong>Return to Menu</strong>.
            </p>
          </section>

          {/* Tips & Strategies */}
          <section>
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Tips &amp; Strategies
            </h3>
            <ul className="list-disc list-inside text-base-content space-y-2 md:space-y-3">
              <li>
                Start small: use smaller boards with no swaps to build memory
                strength.
              </li>
              <li>Watch the swap animations to spot new patterns.</li>
              <li>Choose a theme with objects that stand out most to you.</li>
              <li>Reduce mistakes for higher scores—accuracy trumps speed.</li>
              <li>Challenge friends by sharing your high score.</li>
            </ul>
          </section>
        </div>

        <div className="flex justify-center mt-4">
          <button
            className="px-5 py-2 bg-primary text-primary-content rounded-lg hover:opacity-90 transition"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
